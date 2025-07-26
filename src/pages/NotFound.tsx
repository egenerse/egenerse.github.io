import React from "react";
import { Link } from "react-router-dom";
import { Section, Text } from "@/components";

export const NotFound: React.FC = () => {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-screen pt-20"
      id="not-found"
    >
      <Section id="404-section" variant="primary">
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <Text variant="heading" className="text-text-primary mb-4">
            Page Not Found
          </Text>
          <Text variant="body" className="text-text-secondary mb-8">
            Sorry, the page you're looking for doesn't exist.
          </Text>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium"
          >
            Go Back Home
          </Link>
        </div>
      </Section>
    </main>
  );
};
