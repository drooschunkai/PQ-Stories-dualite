import { createClient } from '@supabase/supabase-js';

// These will be replaced with actual values when Supabase is connected
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database schema interfaces
export interface UserProfile {
  id: string;
  user_id: string;
  username?: string;
  avatar_url?: string;
  language: string;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  prophet_id: string;
  is_completed: boolean;
  is_favorite: boolean;
  completed_at?: string;
  favorited_at?: string;
  created_at: string;
  updated_at: string;
}

// Supabase service functions
export class SupabaseService {
  static async getUserProfile(userId: string): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data;
  }

  static async createUserProfile(profile: Partial<UserProfile>): Promise<UserProfile | null> {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([profile])
      .select()
      .single();

    if (error) {
      console.error('Error creating user profile:', error);
      return null;
    }

    return data;
  }

  static async getUserProgress(userId: string): Promise<UserProgress[]> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching user progress:', error);
      return [];
    }

    return data || [];
  }

  static async updateUserProgress(
    userId: string,
    prophetId: string,
    updates: Partial<UserProgress>
  ): Promise<boolean> {
    const { error } = await supabase
      .from('user_progress')
      .upsert([
        {
          user_id: userId,
          prophet_id: prophetId,
          ...updates,
          updated_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('Error updating user progress:', error);
      return false;
    }

    return true;
  }

  static async markStoryCompleted(userId: string, prophetId: string): Promise<boolean> {
    return this.updateUserProgress(userId, prophetId, {
      is_completed: true,
      completed_at: new Date().toISOString(),
    });
  }

  static async toggleFavorite(userId: string, prophetId: string, isFavorite: boolean): Promise<boolean> {
    return this.updateUserProgress(userId, prophetId, {
      is_favorite: isFavorite,
      favorited_at: isFavorite ? new Date().toISOString() : null,
    });
  }

  static async signUp(email: string, password: string) {
    return await supabase.auth.signUp({
      email,
      password,
    });
  }

  static async signIn(email: string, password: string) {
    return await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  static async signOut() {
    return await supabase.auth.signOut();
  }

  static async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }
}
