import React from 'react';
import { MessageSquare } from 'lucide-react';

export const TestimonialsAdmin: React.FC = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Testimonials</h1>
        <p className="text-muted-foreground">Manage client testimonials</p>
      </div>

      <div className="text-center py-12">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Testimonials Management Coming Soon</h3>
        <p className="text-muted-foreground">Testimonials management interface will be available soon</p>
      </div>
    </div>
  );
}; 