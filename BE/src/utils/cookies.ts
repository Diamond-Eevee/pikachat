export class CookiesUtils {
    static GetCookie(cookies, cookieName: String): string {
        let cookie;
        if (cookies) {
            cookies.split(';').forEach(cookiee => {
                  const parts = cookiee.split('=');
                  const key = parts[0].trim();
                  const value = parts[1].trim();
   
                  if (key === cookieName) {
                     cookie = cookiee;
                  }
            });
         }
         
         return cookie;
    }
}