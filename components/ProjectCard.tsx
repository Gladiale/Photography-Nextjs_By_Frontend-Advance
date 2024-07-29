import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Group, Link2Icon } from "lucide-react";
import Link from "next/link";

type PropsType = {
  project: {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    codepen: string;
  };
};

const ProjectCard = ({ project }: PropsType) => {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="p-0">
        {/* Image */}
        <div className="relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden">
          <Image
            src={project.image}
            width={440}
            height={200}
            alt=""
            priority
            className="absolute top-0 shadow-2xl hover:scale-110 transition-all"
          />

          {/* Link Button */}
          <div className="flex gap-x-4">
            <Link
              href={project.link}
              className="bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all"
            >
              <Link2Icon />
            </Link>

            <Link
              href={project.codepen}
              className="bg-secondary w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all"
            >
              <Group />
            </Link>
          </div>
        </div>
      </CardHeader>

      <div className="h-full px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
          {project.category}
        </Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <h4 className="text-muted-foreground text-lg">{project.description}</h4>
      </div>
    </Card>
  );
};

export default ProjectCard;
