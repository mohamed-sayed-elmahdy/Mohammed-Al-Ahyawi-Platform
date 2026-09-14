import { HeartHandshake, ShieldCheck, TrendingUp, UsersRound } from "lucide-react";

const pillars = [
	{ text: "الأمانة في نقل التجربة", icon: ShieldCheck },
	{ text: "خدمة وإثراء تجربة الزائر", icon: HeartHandshake },
	{
		text: "التحسين المستمر لأداء الأنشطة التجارية والخدمات المختلفة",
		icon: TrendingUp,
	},
	{ text: "تدريب المرشدين المبتدئين", icon: UsersRound },
];

export function MissionVision() {
	return (
		<section className="min-h-full rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-8 sm:p-10">
			<h2 className="font-alexandria text-center text-3xl font-bold text-(--color-accent)">
			رسالة و رؤية
			</h2>
			<div className="mt-9 grid gap-6 sm:grid-cols-4">
				{pillars.map(({ text, icon: Icon }) => (
					<article
						key={text}
						className="border-t border-(--color-accent)/35 pt-6 text-center sm:border-l sm:border-t-0 sm:border-l-(--color-accent)/35 sm:pl-5 sm:first:border-0"
					>
						<Icon className="mx-auto size-12 text-(--color-accent)" />
						<p className="mt-4 text-[15px] leading-8 text-(--color-secondary-text)">
							{text}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
