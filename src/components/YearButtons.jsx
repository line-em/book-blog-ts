import React from 'react'
import { validYears } from '../content/config'
import { BookOpenText, Books } from '@phosphor-icons/react'

const YearButtons = ({ currentYear, isReview }) => {
	const hasFilter = currentYear || isReview
	return (
		<>
			<a
				href={`/index.html`}
				className={`${hasFilter ? '' : 'inactive pointer-events-none opacity-50'} 
			flex items-center px-4 py-2 text-slate-700 rounded-xl shadow-md bg-slate-50 gap-2 w-full self-center`}
			>
				<Books size={24} color="var(--pink)" weight={'duotone'} />
				<span className={`font-medium`}>All Books</span>
			</a>
			{validYears.map((curr) => (
				<a
					className={`${currentYear !== curr ? '' : 'inactive pointer-events-none opacity-50'} 
		flex items-center p-1 sm:px-4 sm:py-2 text-slate-700 rounded-xl sm:shadow-md sm:bg-slate-50 gap-2`}
					href={`/${Number(curr)}`}
				>
					<BookOpenText
						size={24}
						color="var(--pink)"
						weight={'duotone'}
						className="hidden sm:flex"
					/>
					<span class="font-medium">{curr}</span>
				</a>
			))}
		</>
	)
}

export default YearButtons
