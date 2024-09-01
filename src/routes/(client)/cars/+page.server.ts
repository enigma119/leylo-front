import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const load = async () => {
  const form = await superValidate(zod(schema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));
    if (!form.valid) {
      return fail(400, { form });
    }

    // Attempt to sign in with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.data.email,
      password: form.data.password,
    });

    if (error) {
      return fail(400, { form, error: error.message });
    }

    // Successful login
    return { form };
  }
};