// infrastructure/repositories/SupabaseUserRepository.ts

import { UserRepository } from "@/domain/repositories/UserRepository"
import { supabase } from "../config/supabase"
import { User } from "@/domain/entities/User"
import { Email } from "@/domain/value-objects/Email"

export class SupabaseUserRepository implements UserRepository {
  findByEmail(email: Email): Promise<User | null> {
      throw new Error("Method not implemented.")
  }
  async create(user: User): Promise<void> {
    await supabase.from("users").insert({...})
  }
}