import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

// Product data
const products = [
  { id: 1, name: 'Samsung 5-Door Flex Refrigerator', brand: 'Samsung', category: 'Kitchen', price: '₹2,32,000' },
  { id: 2, name: 'LG 65" OLED C3 Series TV', brand: 'LG', category: 'Living Room', price: '₹1,49,000' },
  { id: 3, name: 'IKEA MALM Bed Frame', brand: 'IKEA', category: 'Bedroom', price: '₹16,500' },
  { id: 4, name: 'Bosch Serie 6 Dishwasher', brand: 'Bosch', category: 'Kitchen', price: '₹70,500' },
  { id: 5, name: 'Dyson V15 Detect Vacuum', brand: 'Dyson', category: 'Home Appliances', price: '₹53,900' },
  { id: 6, name: 'Herman Miller Aeron Chair', brand: 'Herman Miller', category: 'Office', price: '₹1,15,800' },
  { id: 7, name: 'Whirlpool Front Load Washer', brand: 'Whirlpool', category: 'Laundry', price: '₹74,600' },
  { id: 8, name: 'KitchenAid Stand Mixer', brand: 'KitchenAid', category: 'Kitchen', price: '₹35,600' },
  { id: 9, name: 'Philips Hue Smart Lighting Kit', brand: 'Philips', category: 'Lighting', price: '₹16,500' },
  { id: 10, name: 'West Elm Mid-Century Sofa', brand: 'West Elm', category: 'Living Room', price: '₹1,57,600' },
  { id: 11, name: 'Nest Learning Thermostat', brand: 'Nest', category: 'Smart Home', price: '₹20,700' },
  { id: 12, name: 'Sony HT-A7000 Soundbar', brand: 'Sony', category: 'Entertainment', price: '₹1,07,800' },
  { id: 13, name: 'Tempur-Pedic Mattress', brand: 'Tempur-Pedic', category: 'Bedroom', price: '₹1,82,500' },
  { id: 14, name: 'Breville Barista Express', brand: 'Breville', category: 'Kitchen', price: '₹58,000' },
  { id: 15, name: 'Crate & Barrel Dining Set', brand: 'Crate & Barrel', category: 'Dining', price: '₹1,24,400' },
  { id: 16, name: 'GE Profile Smart Oven', brand: 'GE', category: 'Kitchen', price: '₹2,73,800' },
  { id: 17, name: 'Ashley Furniture Sectional', brand: 'Ashley', category: 'Living Room', price: '₹1,07,800' },
  { id: 18, name: 'Pottery Barn Bed Frame', brand: 'Pottery Barn', category: 'Bedroom', price: '₹1,41,000' },
  { id: 19, name: 'Shark Robot Vacuum', brand: 'Shark', category: 'Home Appliances', price: '₹37,300' },
  { id: 20, name: 'Miele Complete C3 Vacuum', brand: 'Miele', category: 'Home Appliances', price: '₹99,500' },
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { preferences } = await req.json();
    console.log('Received preferences:', preferences);

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    // Create a detailed prompt for the AI
    const systemPrompt = `You are an expert interior design consultant specializing in product recommendations. 
Analyze the user's design preferences and recommend 5 products from the available product list that best match their needs.
Consider their style preferences, room types, budget constraints, and specific requirements.
Provide personalized explanations for why each product suits their preferences.`;

    const userPrompt = `Based on these design preferences:
Style: ${preferences.style}
Rooms: ${preferences.rooms?.join(', ') || 'Not specified'}
Budget: ${preferences.budget}
Special Requirements: ${preferences.specialRequirements || 'None'}

Available products:
${products.map(p => `${p.id}. ${p.name} (${p.brand}) - ${p.category} - ${p.price}`).join('\n')}

Recommend exactly 5 products that best match these preferences. For each product, explain why it's a good fit.
Return your response as a JSON array with this exact structure:
[
  {
    "productId": 1,
    "reason": "This product is perfect for you because..."
  }
]`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your Lovable AI workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    console.log('AI response:', aiResponse);

    // Parse the AI response to extract recommendations
    let recommendations;
    try {
      // Extract JSON from the response (AI might wrap it in markdown code blocks)
      const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        recommendations = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Could not parse AI response');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      throw new Error('Failed to parse recommendations');
    }

    // Enrich recommendations with full product details
    const enrichedRecommendations = recommendations.map((rec: any) => {
      const product = products.find(p => p.id === rec.productId);
      return {
        ...product,
        reason: rec.reason,
      };
    });

    console.log('Enriched recommendations:', enrichedRecommendations);

    return new Response(
      JSON.stringify({ recommendations: enrichedRecommendations }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in ai-product-recommendations:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
