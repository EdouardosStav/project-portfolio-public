
import { Brain, Code, Database, FileCode, FolderGit2, Server, Terminal, Palette, Blocks } from "lucide-react";

interface ProjectTagProps {
  tag: string;
}

export function ProjectTag({ tag }: ProjectTagProps) {
  // Select appropriate icon based on tag
  const getTagIcon = (tag: string) => {
    const lowerCaseTag = tag.toLowerCase();
    
    if (lowerCaseTag.includes("react") || lowerCaseTag.includes("vue") || lowerCaseTag.includes("angular")) {
      return <Code className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("node") || lowerCaseTag.includes("express") || lowerCaseTag.includes("next")) {
      return <Server className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("mongo") || lowerCaseTag.includes("sql") || lowerCaseTag.includes("firebase") || lowerCaseTag.includes("supabase")) {
      return <Database className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("git") || lowerCaseTag.includes("github")) {
      return <FolderGit2 className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("typescript") || lowerCaseTag.includes("javascript")) {
      return <FileCode className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("gpt") || lowerCaseTag.includes("ai") || lowerCaseTag.includes("openai")) {
      return <Brain className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("tailwind") || lowerCaseTag.includes("css") || lowerCaseTag.includes("sass")) {
      return <Palette className="h-3 w-3" />;
    } else if (lowerCaseTag.includes("supabase")) {
      return <Blocks className="h-3 w-3" />;
    } else {
      return <Terminal className="h-3 w-3" />;
    }
  };

  return (
    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground flex items-center gap-1">
      {getTagIcon(tag)}
      {tag}
    </span>
  );
}
