import type { NextApiRequest, NextApiResponse } from "next";
import { ProjectsData } from "./projects.data";
import { IProjects } from "./projects.type";

export default function GetProjects(
  req: NextApiRequest,
  res: NextApiResponse<IProjects[]>
) {
  res.status(200).json(ProjectsData);
}
