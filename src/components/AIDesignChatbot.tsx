import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  designIframe?: string;
}

interface DesignMapping {
  keywords: string[];
  title: string;
  description: string;
  iframeSrc: string;
}

const designMappings: DesignMapping[] = [
  {
    keywords: ['kitchen', 'modern kitchen', 'contemporary kitchen', 'kitchen design'],
    title: 'Modern Kitchen Design',
    description: 'Here\'s a stunning modern kitchen design with sleek finishes and optimal functionality.',
    iframeSrc: 'https://3dwarehouse.sketchup.com/embed/b7c1ce71c20945eb605afa80919f9592?token=oMOuLOZ6tWU=&binaryName=s21'
  },
  {
    keywords: ['bathroom', 'modern bathroom', 'bathroom design', 'contemporary bathroom'],
    title: 'Luxury Bathroom Suite',
    description: 'A sophisticated bathroom design featuring premium fixtures and elegant styling.',
    iframeSrc: 'https://3dwarehouse.sketchup.com/embed/u12345678-example-bathroom?token=example'
  },
  {
    keywords: ['living room', 'lounge', 'sitting room', 'family room'],
    title: 'Contemporary Living Space',
    description: 'An inviting living room design that combines comfort with modern aesthetics.',
    iframeSrc: 'https://3dwarehouse.sketchup.com/embed/u87654321-example-living?token=example'
  },
  {
    keywords: ['bedroom', 'master bedroom', 'bedroom design'],
    title: 'Master Bedroom Retreat',
    description: 'A serene bedroom design focused on comfort and relaxation.',
    iframeSrc: 'https://3dwarehouse.sketchup.com/embed/u11111111-example-bedroom?token=example'
  },
  {
    keywords: ['garden', 'outdoor space', 'patio', 'backyard'],
    title: 'Garden Paradise',
    description: 'A beautiful outdoor space design perfect for entertaining and relaxation.',
    iframeSrc: 'https://3dwarehouse.sketchup.com/embed/u22222222-example-garden?token=example'
  }
];

const suggestedPrompts = [
  'Create a modern kitchen',
  'Design a luxury bathroom',
  'Show me a contemporary living room',
  'Generate a cozy bedroom',
  'Design an outdoor garden space'
];

interface AIDesignChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIDesignChatbot: React.FC<AIDesignChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chatbot opens
      const welcomeMessage: ChatMessage = {
        id: Date.now().toString(),
        type: 'ai',
        content: "👋 Hello! I'm your AI design assistant. I can generate stunning home designs in real-time. Try asking me to create a modern kitchen, luxury bathroom, or any room you'd like to see!",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const findDesignMatch = (query: string): DesignMapping | null => {
    const lowerQuery = query.toLowerCase();
    return designMappings.find(mapping => 
      mapping.keywords.some(keyword => lowerQuery.includes(keyword))
    ) || null;
  };

  const simulateTyping = async (duration: number = 2000): Promise<void> => {
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, duration));
    setIsTyping(false);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI processing
    await simulateTyping(1500);

    const designMatch = findDesignMatch(inputValue);
    
    if (designMatch) {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: `✨ ${designMatch.description}`,
        timestamp: new Date(),
        designIframe: designMatch.iframeSrc
      };
      setMessages(prev => [...prev, aiResponse]);
      
      // Add follow-up message
      setTimeout(() => {
        const followUp: ChatMessage = {
          id: (Date.now() + 2).toString(),
          type: 'ai',
          content: "What do you think? Would you like me to generate another design or modify this one?",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, followUp]);
      }, 1000);
    } else {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: "I'd love to help you create that design! Could you be more specific about the type of room or space you'd like me to design? For example, try asking for a 'modern kitchen' or 'luxury bathroom'.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }
  };

  const handleSuggestedPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="h-full flex flex-col">
        {/* Fullscreen Chatbot Interface */}
        <Card className="h-full flex flex-col glass-card border-primary/20 shadow-2xl rounded-none">
          {/* Header */}
          <div className="p-6 border-b border-border bg-gradient-primary text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">AI Design Assistant</h1>
                  <p className="text-white/80">Powered by Advanced AI - Generate designs in real-time</p>
                </div>
              </div>
              <Button
                onClick={onClose}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 w-10 h-10"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-4xl mx-auto w-full">
              {messages.map((message) => (
              <div key={message.id} className={cn(
                "flex",
                message.type === 'user' ? "justify-end" : "justify-start"
              )}>
                <div className={cn(
                  "max-w-[70%] p-4 rounded-lg",
                  message.type === 'user' 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-foreground"
                )}>
                    <div className="flex items-start space-x-2">
                      {message.type === 'ai' && (
                        <Bot className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm">{message.content}</p>
                        
                      {/* Design Iframe */}
                      {message.designIframe && (
                        <div className="mt-4 rounded-lg overflow-hidden border border-border">
                          <iframe
                            src={message.designIframe}
                            className="w-full h-96"
                            frameBorder="0"
                            allowFullScreen
                            title="AI Generated Design"
                          />
                        </div>
                      )}
                      </div>
                      {message.type === 'user' && (
                        <User className="w-4 h-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground p-3 rounded-lg max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-primary" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                      <span className="text-xs text-muted-foreground">AI is designing...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

          {/* Suggested Prompts (shown when no messages) */}
          {messages.length === 1 && (
            <div className="px-6 pb-4 max-w-4xl mx-auto w-full">
              <div className="text-sm text-muted-foreground mb-4">Try these suggestions:</div>
              <div className="flex flex-wrap gap-2">
                {suggestedPrompts.map((prompt, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-sm h-10"
                    onClick={() => handleSuggestedPrompt(prompt)}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-6 border-t border-border">
            <div className="max-w-4xl mx-auto flex space-x-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe your dream space in detail... (e.g., 'Create a modern kitchen with white cabinets')"
                className="flex-1 px-4 py-3 text-base border border-input bg-background rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 text-base"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};