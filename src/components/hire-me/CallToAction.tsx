import { Container } from "@/common/component/elements/container";
import { Handshake, Wallet } from "lucide-react";
import Link from "next/link";

export const CallToAction = () => {
  return (
    <Container title="Let's Work Together" icon={<Handshake />} className="border-b-0 pb-0">
        <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 border border-neutral-200 rounded-xl bg-white space-y-3">
                <h3 className="font-semibold text-neutral-800">Start a Project</h3>
                <p className="text-sm text-neutral-600">
                    Have a project in mind? I'm available for freelance work. Let's discuss your requirements and build something great.
                </p>
                <Link href="/contact" className="inline-block bg-neutral-800 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-neutral-700 transition-colors">
                    Contact Me
                </Link>
            </div>
            <div className="p-6 border border-neutral-200 rounded-xl bg-white space-y-3">
                <h3 className="font-semibold text-neutral-800 flex items-center gap-2">
                    <Wallet size={18} />
                    Make a Payment
                </h3>
                <p className="text-sm text-neutral-600">
                    If we've already agreed on a project, you can make a secure payment directly through Wise.
                </p>
                <Link href="https://wise.com/pay/business/rohitbind" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                    Pay with Wise
                </Link>
            </div>
        </div>
    </Container>
  );
};
