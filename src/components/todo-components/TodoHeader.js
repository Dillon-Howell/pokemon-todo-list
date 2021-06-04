export const TodoHeader = () => {
	// TODO improve this, this is just to test the design
	const date = new Date();
	const day = date.getDate();
	const weekDay = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	][date.getDay()];
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	][date.getMonth()];

	const enOrdinalRules = new Intl.PluralRules('en', { type: 'ordinal' });
	const enOrdinalRulesMap = {
		one: 'st',
		two: 'nd',
		few: 'rd',
		other: 'th',
	};
	const enOrdinalSuffix = enOrdinalRulesMap[enOrdinalRules.select(day)];

	const getGreeting = (hour) => {
		if (hour >= 6 && hour < 10) {
			return 'Good Morning';
		} else if (hour >= 10 && hour < 19) {
			return 'Good Afternoon';
		} else if (hour >= 19 || hour <= 6) {
			return 'Good Evening';
		}
	};

	const getHeaderImageClass = (hour) => {
		if (hour >= 6 && hour < 10) {
			return 'evening-background';
		} else if (hour >= 10 && hour < 19) {
			return 'day-background';
		} else if (hour >= 19 || hour <= 6) {
			return 'night-background';
		}
	};

	return (
		<header className={`${getHeaderImageClass(date.getHours())} all-center`}>
            		<p className='text-test' style={{ fontSize: '20px' }}>
				{getGreeting(date.getHours())}
			</p>
			<h1 className='text-test'>{`${weekDay}, ${day}${enOrdinalSuffix}`}</h1>
			<p className='text-test' style={{ fontSize: '30px' }}>
				{month}
			</p>
		</header>
	);
};

export default TodoHeader;
