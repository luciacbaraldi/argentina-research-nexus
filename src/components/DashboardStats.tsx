
import { Card } from "@/components/ui/card";
import { BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Bar } from "recharts";

const sampleStats = [
  { name: "UBA", Publicaciones: 1280 },
  { name: "CONICET", Publicaciones: 2740 },
  { name: "UNLP", Publicaciones: 990 },
  { name: "UTN", Publicaciones: 560 },
  { name: "CEDES", Publicaciones: 320 },
];

export function DashboardStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="font-bold text-lg mb-3">Producción anual por institución</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={sampleStats}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Publicaciones" fill="#74ACDF" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
      <Card className="p-6 flex flex-col items-center justify-center">
        <h3 className="font-bold text-lg mb-3">Publicaciones Totales</h3>
        <span className="text-5xl font-extrabold text-[#2886CC] mb-2">7,415</span>
        <span className="text-gray-500 text-sm">Datos de ejemplo de la base inicial</span>
      </Card>
    </section>
  );
}
