window.onload = async () => {
	const app = document.getElementById('app');

	let spaceXData = await fetch('./data.json');
	spaceXData = await spaceXData.json();
	console.log(spaceXData);

	let missions = spaceXData.map((mission) => {
		return `
			<article>
				<h1>${mission.mission_name}</h1>
				<p>${mission.description}</p>
				<img src='${mission.image}' />
				<a href='${mission.website}'>Web site</a><br>
				<a href='${mission.wikipedia}'>Wikipedia</a>
			</article>
		`;
	});

	missions.forEach((mission) => (app.innerHTML += mission));
};
