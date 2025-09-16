"use client";

import { useState } from "react";
import Link from "next/link";
import { Briefcase, ChevronDown, ChevronsRight, ExternalLink, GitMerge } from "lucide-react";
import { Container } from "@/common/component/elements/container";
import { clientsData, PullRequest } from "@/common/constant/hireMeData";

interface ClientWorkCardProps {
  logo: string;
  name: string;
  role: string;
  link: string;
  summary: string;
  contributions: readonly { description: string; link?: string }[];
  prs?: readonly PullRequest[];
}

const ClientWorkCard = ({ logo, name, role, link, summary, contributions, prs }: ClientWorkCardProps) => {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="border rounded-lg p-4 w-full bg-white shadow-sm">
      <div className="flex items-start gap-4">
        <img src={logo} alt={name} className="w-12 h-12 rounded-md mt-1" />
        <div className="flex-1">
          <h3 className="text-base font-bold text-neutral-800">{name}</h3>
          <ul className="text-neutral-600 text-sm md:flex space-y-1 md:gap-3 mt-1">
            <li>{role}</li>
            <li className="md:before:content-['•'] md:before:mr-3">
              <Link href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
                View Project <ExternalLink size={12} />
              </Link>
            </li>
          </ul>
          <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{summary}</p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center text-neutral-500 text-sm cursor-pointer mt-3"
          >
            {showDetails ? <ChevronDown className="w-4 h-4 mr-1" /> : <ChevronsRight className="w-4 h-4 mr-1" />}
            {showDetails ? "Hide Details" : "Show Details"}
          </button>

          {showDetails && (
            <div className="mt-4 space-y-3">
              <ul className="space-y-3 text-sm text-neutral-600">
                {contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1">➜</span>
                    <div>
                      {item.description}
                      {item.link && (
                        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="ml-1 text-blue-600 hover:underline inline-flex items-center gap-1">
                           (link <ExternalLink size={12} />)
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              {prs && prs.length > 0 && (
                 <div className="border-t border-dashed pt-3">
                    <div className="flex items-center gap-2 font-semibold text-neutral-700 text-sm">
                      <GitMerge size={14} className="text-purple-500" />
                      <h4>Key Pull Requests</h4>
                    </div>
                    <ul className="mt-2 pl-6 space-y-1">
                      {prs.map((pr, index) => (
                        <li key={index} className="text-sm">
                          <Link href={pr.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-blue-600 hover:underline">
                            <GitMerge size={14} className="mt-1 flex-shrink-0" />
                            <span>{pr.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const ClientWork = () => {
  return (
    <Container title="Client Work & Contributions" icon={<Briefcase />}>
      <div className="space-y-6">
        {clientsData.map((client, index) => (
          <ClientWorkCard key={index} {...client} />
        ))}
      </div>
    </Container>
  );
};
