# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e5]:
    - heading "404" [level=1] [ref=e6]
    - paragraph [ref=e7]: "Page not found: /login"
    - link "Go back home" [ref=e9] [cursor=pointer]:
      - /url: /
  - generic [ref=e10]:
    - button "Toggle Nuxt DevTools" [ref=e11] [cursor=pointer]:
      - img [ref=e12] [cursor=pointer]
    - generic "App load time" [ref=e15]:
      - generic [ref=e16]: "332"
      - generic [ref=e17]: ms
    - button "Toggle Component Inspector" [ref=e19] [cursor=pointer]:
      - img [ref=e20] [cursor=pointer]
```