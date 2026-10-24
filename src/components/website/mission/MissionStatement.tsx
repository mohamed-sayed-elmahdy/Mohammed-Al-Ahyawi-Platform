import { HeartHandshake, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";

const pillars = [
	{ text: "الأمانة في نقل التجربة", icon: ShieldCheck },
	{ text: "خدمة وإثراء تجربة الزائر", icon: HeartHandshake },
	{
		text: "التحسين المستمر للنشاط والخدمة",
		icon: TrendingUp,
	},
	{ text: "تدريب المرشدين المبتدئين", icon: UsersRound },
];

export function MissionStatement() {
	return (
		<section className="w-full rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-6 sm:p-10">
			<h1 className="font-alexandria text-center text-3xl font-bold text-(--color-accent) sm:text-4xl">
				رسالة المنصة
			</h1>
			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4">
				{pillars.map(({ text, icon: Icon }) => (
					<article
						key={text}
						className="flex flex-col items-center rounded-[24px] border border-(--color-accent)/25 bg-(--color-background)/35 px-5 py-7 text-center"
					>
						<Icon aria-hidden="true" className="size-11 text-(--color-accent)" />
						<p className="mt-4 text-[15px] leading-8 text-(--color-secondary-text) sm:text-base">
							{text}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
