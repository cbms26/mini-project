import { ref } from 'vue';
import { useRouter } from 'vue-router';

const user = ref<string | null>(null);

export function useAuth() {
  const router = useRouter();
  function login(username: string) {
    user.value = username;
    router.push('/home');
  }
  function logout() {
    user.value = null;
    router.push('/login');
  }
  return { user, login, logout };
}
