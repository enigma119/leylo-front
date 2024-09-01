import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export async function POST({ request }) {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
        return json({ success: false, errors: result.error.flatten().fieldErrors }, { status: 400 });
    }

    const { email, password } = result.data;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return json({ success: false, error: error.message }, { status: 400 });
    }

    return json({ success: true, user: data.user });
}
