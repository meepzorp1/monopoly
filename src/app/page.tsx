import Image from "next/image";
import Board from "./Board";
import Player from "./Player";

export default function Home() {
  return (
    <main className="flex min-h-screen flex justify-between">
      <Player />
      <Board />
      <Player />
    </main>
  );
}
