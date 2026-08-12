"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { circleInfo } from "@/data/circleInfo";

export default function InfoSection() {
  const infoRows = [
    { label: "サークル名", value: `${circleInfo.name}（${circleInfo.nameJa}）` },
    { label: "設立", value: circleInfo.founded },
    { label: "所属大学", value: circleInfo.university },
    {
      label: "SNS",
      value: (
        <a
          href={circleInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-caramel hover:underline"
        >
          Instagram
        </a>
      ),
    },
  ];

  return (
    <section
      id="info"
      className="py-24 md:py-32 bg-fabric-cream relative stitch-border"
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle title="サークル情報" subtitle="INFORMATION" />
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <table className="w-full text-sm">
            <tbody>
              {infoRows.map((row) => (
                <tr key={row.label} className="border-b border-caramel/20">
                  <th className="py-4 pr-6 text-left text-dark-brown font-medium w-32 md:w-40 align-top whitespace-nowrap">
                    {row.label}
                  </th>
                  <td className="py-4 text-dark-brown/70">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
