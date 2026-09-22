// 📁 src/app/auth/auth-http-interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const authHttpInterceptor: HttpInterceptorFn = (req, next) => {
  // 🚀 İstek üzerinde değişiklik yapıyoruz (withCredentials ekliyoruz):
  const modifiedReq = req.clone({
    withCredentials: true
  });

  // ➡️ Düzenlenmiş isteği bir sonraki adıma gönderiyoruz:
  return next(modifiedReq);
};