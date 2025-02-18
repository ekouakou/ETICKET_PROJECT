// authService.js
export class AuthService {
    checkAuth(navigate) {
      const storedUser = JSON.parse(localStorage.getItem("userConnectedData"));
      if (!storedUser) {
        const paths = JSON.parse(localStorage.getItem("appPaths"));
        navigate(paths.signIn);
        return null;
      }
      return storedUser;
    }
  }
  
  export const authService = new AuthService();
  