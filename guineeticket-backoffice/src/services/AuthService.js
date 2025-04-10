// authService.js
export class AuthService {
    checkAuth(navigate) {
      const storedUser = JSON.parse(localStorage.getItem("userConnectedData"));
      if (!storedUser || storedUser == null) {
        navigate(process.env.REACT_APP_SIGN_IN);
        return null;
      }
      return storedUser;
    }
  }
  
  export const authService = new AuthService();
  