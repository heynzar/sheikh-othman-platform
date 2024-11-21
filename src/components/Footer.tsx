export default function Footer() {
  return (
    <footer
      dir="ltr"
      className="font-sans border-t text-lg border-neutral-500 flex max-h-[60px] py-4 items-center justify-center px-10"
    >
      <p>
        &copy; {new Date().getFullYear()}
        <a
          target="_blank"
          href="https://nzar.dev"
          className="text-blue-500 hover:underline ml-1"
        >
          nzar.dev
        </a>
        <span className="ml-1">| برنامج مفاتح الطلب</span>
      </p>
    </footer>
  );
}
