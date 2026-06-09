import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const env1 = 'https://ctd-learns-node-l42tx.ondigitalocean.app';
  //  if (!target) throw new Error('VITE_TARGET not defined')} else { ('Target ')};

  return defineConfig({
  // (target);
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: env1,
          secure: false,
          changeOrigin: true,
          // rewrite: path => path,
          configure: (proxy) => {
            proxy.on('proxyRes', (proxyRes) => {
              const cookies = proxyRes.headers['set-cookie'];
              if (!cookies) return;
              const cookieArray = Array.isArray(cookies) ? cookies : [cookies];
              proxyRes.headers['set-cookie'] = cookieArray.map(cookie =>
                cookie.split(';').map(p => p.trim()).filter(p => !/^(Secure|SameSite=None|Domain=)/i.test(p)).join('; ')
              );
            });
          },
        },
      },
    },
  });
};
