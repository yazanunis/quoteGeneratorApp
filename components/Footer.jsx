import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-blue-400 px-20">
      <div className="flex flex-col items-center sm:items-center sm:justify-between">
        <span className="text-sm text-black sm:text-center">
          {" "}
          <span>
            Developed By {" "}
            <Link
              href="https://yazanunis.vercel.app"
              className="hover:underline"
            >
             YazanUnis | {" "}
            </Link>
            <small>2023</small>
          </span>
        </span>
      </div>
    </footer>
  )
}
