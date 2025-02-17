import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="Logo Movimiento Puente"
        width={34}
        height={26}
      />
      <p className="text-xs font-medium">Archivo MP</p>
    </div>
  );
}
