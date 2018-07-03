import React from 'react'
import Link from './Link'

const Footer = () => (
  <footer className="footer">
    <Link to="https://twitter.com/astrocart" title="Twitter">
      <svg
        aria-labelledby="simpleicons-twitter-icon"
        role="img"
        viewBox="0 0 24 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Twitter icon</title>
        <path d="M23.954 2.57c-.885.388-1.83.653-2.825.774 1.013-.61 1.793-1.574 2.162-2.723-.95.556-2.005.96-3.127 1.185-.896-.96-2.173-1.56-3.59-1.56-2.718 0-4.92 2.204-4.92 4.918 0 .39.044.765.126 1.124C7.69 6.094 4.067 4.13 1.64 1.16c-.427.723-.666 1.562-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.06c0 2.386 1.693 4.375 3.946 4.828-.413.11-.85.17-1.296.17-.314 0-.615-.03-.916-.085.63 1.952 2.445 3.376 4.604 3.416-1.68 1.32-3.81 2.105-6.102 2.105-.39 0-.78-.022-1.17-.066 2.19 1.394 4.768 2.21 7.557 2.21 9.054 0 14-7.497 14-13.987 0-.21 0-.42-.016-.63.962-.69 1.8-1.56 2.46-2.548l-.046-.02z" />
      </svg>
    </Link>
    <Link to="https://github.com/lorenries" title="Github">
      <svg
        aria-labelledby="simpleicons-github-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Github icon</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    </Link>
    <Link to="https://keybase.io/lries" title="Keybase">
      <svg
        aria-labelledby="simpleicons-keybase-icon"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <title>Keybase icon</title>
        <path d="M10.446 21.371a.953.953 0 1 1-.955-.954c.524 0 .951.431.951.955m5.922-.001a.953.953 0 1 1-.958-.954c.526 0 .954.431.954.955" />
        <path d="M20.904 12.213l-.156-.204c-.046-.06-.096-.116-.143-.175-.045-.061-.094-.113-.141-.169-.104-.12-.209-.239-.319-.359l-.076-.08-.091-.099-.135-.131c-.015-.018-.032-.034-.05-.053a10.87 10.87 0 0 0-3.955-2.504l-.23-.078.035-.083a4.108 4.108 0 0 0-.12-3.255 4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.711-.305-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306a11.279 11.279 0 0 0-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03-.985 3.091 1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529 1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496 0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.217-.008.605.025 1.233.232.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502-.002-.003a1.468 1.468 0 0 0-2.059-.205c-.334.27-.514.66-.534 1.058-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425a.228.228 0 0 1-.323-.032l-.111-.135a.238.238 0 0 1 .034-.334l.51-.42-1.055-1.299a.307.307 0 0 1 .044-.436.303.303 0 0 1 .434.041l2.963 3.645a.309.309 0 0 1-.168.499.315.315 0 0 1-.31-.104l-.295-.365-1.045.854a.244.244 0 0 1-.154.055.237.237 0 0 1-.186-.09l-.477-.579a.24.24 0 0 1 .035-.336l1.051-.857-.426-.533-.002.001zM7.753 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.401a.462.462 0 0 1 .461-.436h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.269 9.269 0 0 0-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718-3.886-1.141-7.396-.903-10.468.701l1.636-5.123-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311.471.373 1.034.66 1.673.841.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582a1.39 1.39 0 0 0 1.079.513c.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381.135.037.271.078.4.12.266.097.533.198.795.315a9.55 9.55 0 0 1 2.771 1.897c.029.03.059.055.085.083l.17.175a9.168 9.168 0 0 1 .35.387l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154.838 1.149.987 2.329.404 3.157v.005z" />
        <path d="M7.719 4.115l-.835-.051.053-.835.834.051-.052.835z" />
      </svg>
    </Link>
  </footer>
)

export default Footer
