import { useEffect, useState } from "react";

export default function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash.replace("#", ""));
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.replace("#", ""));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}