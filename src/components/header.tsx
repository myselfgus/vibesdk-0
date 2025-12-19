import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router';
import { Sparkles } from 'lucide-react';

export function Header({
	className,
	children,
}: React.ComponentProps<'header'>) {
	return (
		<header
			className={clsx(
				'h-13 shrink-0 w-full px-4 border-b border-white/50 dark:border-white/10 flex items-center bg-health-bg/80 dark:bg-health-dark/80 backdrop-blur-sm',
				className,
			)}
		>
			<h1 className="flex items-center gap-2 mx-4">
				<Link to="/" className="flex items-center gap-2">
					<div className="w-6 h-6 rounded-lg bg-gradient-to-br from-health-teal to-health-teal/80 flex items-center justify-center shadow-sm">
						<Sparkles className="w-3 h-3 text-white" />
					</div>
					<span className="font-serif text-base text-health-dark dark:text-health-bg">vibesdk</span>
				</Link>
			</h1>
			<div className="flex-1"></div>
			<div className="flex items-center gap-4">
				{children}
			</div>
		</header>
	);
}
