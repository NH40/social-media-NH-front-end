const fullNames: string[] = [
	'John Doe',
	'Jane Smith',
	'Emily Johnson',
	'Michael Williams',
	'Mary Brown',
	'David Jones',
	'Sarah Miller',
	'James Davis',
	'Linda Garcia',
	'Robert Wilson',
]

export function getRandomFullName(): string {
	const randomIndex = Math.floor(Math.random() * fullNames.length)
	return fullNames[randomIndex]
}
