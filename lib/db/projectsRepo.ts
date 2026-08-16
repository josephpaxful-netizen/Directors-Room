import { Project } from "@/lib/types";
import { supabaseServer } from "./supabaseServer";

export async function listProjects(): Promise<Project[]> {
  // TODO: replace with real Supabase query.
  // This placeholder returns an empty list to avoid coupling to the seed store.
  return [];
}

export async function getProjectById(id: string): Promise<Project | null> {
  const _client = supabaseServer();
  // TODO: SELECT * FROM projects WHERE id = ...
  // For now, return null so existing in-memory store continues to be used.
  return null;
}
