import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref<string | null>(null);
const error = ref<string>('');

export function useAuth() {
  const router = useRouter();
  function login(email: string, password: string) {
    if (email === 'user@gmail.com' && password === 'user') {
      user.value = email;
      error.value = '';
      router.push('/dashboard');
    } else {
      error.value = 'Invalid credentials';
    }
  }
  function logout() {
    user.value = null;
    router.push('/');
  }
  return { user, error, login, logout };
}
