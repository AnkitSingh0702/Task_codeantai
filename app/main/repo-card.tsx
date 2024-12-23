import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface RepositoryCardProps {
  name: string;
  language: string;
  size: string;
  isPrivate: boolean;
  updatedAt: Date;
  languageColor?: string;
  contributors: Array<{ initials: string; color: string }>;
}

export function RepositoryCard({
  name,
  language,
  size,
  isPrivate,
  updatedAt,
  languageColor = "#000",
}: RepositoryCardProps) {
  return (
    //repository card
    <div className="flex items-center justify-between px-6 py-4 border-b  hover:bg-zinc-100 transition-colors">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <Badge
            variant={isPrivate ? "outline" : "secondary"}
            className="rounded-full border-none text-sm font-normal bg-[#EFF8FF] text-[#175CD3]"
          >
            {isPrivate ? "Private" : "Public"}
          </Badge>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap-nowrap">
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: languageColor }}
            />
            {language}
          </span>

          <span className="flex items-center gap-1">
            <svg
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="fill-current opacity-50"
            >
              <path d="M2.5 5.5C2.5 3.57 4.07 2 6 2h4c1.93 0 3.5 1.57 3.5 3.5v5c0 1.93-1.57 3.5-3.5 3.5H6c-1.93 0-3.5-1.57-3.5-3.5v-5zm2.5-.5c0 .28.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5zm0 3c0 .28.22.5.5.5h5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5zm0 3c0 .28.22.5.5.5h3c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5z" />
            </svg>
            {size}
          </span>

          <span>
            Updated {formatDistanceToNow(updatedAt, { addSuffix: true })}
          </span>
        </div>
      </div>
    </div>
  );
}
