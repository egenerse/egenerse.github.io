import { Text } from "@/components";

export const Contact = () => {
  return (
    <div className="text-center max-w-4xl px-8">
      <Text variant="heading" className="mb-8">
        Contact Me
      </Text>
      <div className="space-y-6">
        <Text variant="body">Feel free to reach out!</Text>
        <div className="flex flex-col space-y-3">
          <a href="mailto:egenerse@gmail.com">
            <Text variant="caption">📧 egenerse@gmail.com</Text>
          </a>

          <a
            href="https://www.linkedin.com/in/ege-nerse-b81aba115/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="caption">💼 LinkedIn: Ege Nerse</Text>
          </a>
          <a
            href="https://github.com/egenerse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text variant="caption">🐙 GitHub: egenerse</Text>
          </a>
        </div>
      </div>
    </div>
  );
};
