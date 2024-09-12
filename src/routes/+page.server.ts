import { signUpSchema, signInSchema } from '$lib/components/auth/schema';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types'
import type { SupabaseClient } from '@supabase/supabase-js'
import { fail } from '@sveltejs/kit';
export const prerender = false;



export const load: PageServerLoad = async ({ locals: { supabase } }: { locals: { supabase: SupabaseClient } }) => {
  const { data: countries } = await supabase.from('countries').select('name').limit(5).order('name')
  const signUpForm = await superValidate(zod(signUpSchema));
  const signInForm = await superValidate(zod(signInSchema));
  return { signUpForm, signInForm, countries: countries ?? [] };
}

// export const actions: Actions = {
//     'sign-up': async ({ request }) => {
//       const form = await superValidate(request, zod(signUpSchema));
//       if (!form.valid) {
//         return fail(400, { form });
//       }
//       // TODO: Implement actual sign-up logic here
//       console.log("Sign-up submitted:", form.data);
//       return { form };
//     },
//     'sign-in': async ({ request }) => {
//       const form = await superValidate(request, zod(signInSchema));
//       if (!form.valid) {
//         return fail(400, { form });
//       }
//       // TODO: Implement actual sign-in logic here
//       console.log("Sign-in submitted:", form.data);
//       return { form };
//     }
//   };