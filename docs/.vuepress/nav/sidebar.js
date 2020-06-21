module.exports = {
  getDocumentationSidebar: (main, dependenciesBadges) => {
    return [
      {
        title: main,
        collapsable: false,
        children: ['']
      },
      {
        title: dependenciesBadges,
        collapsable: true,
        children: ['']
      }
    ]
  },
  getGamesSidebar: (animalCrossings, oxygenNotIncluded) => {
    return [
      '',
      {
        title: animalCrossings,
        collapsable: true,
        children: ['animal-crossings/']
      },
      {
        title: oxygenNotIncluded,
        collapsable: true,
        children: ['oni-useful-links']
      }
    ]
  },
  getSafeSidebar: (main, ssh) => {
    return [
      {
        title: main,
        collapsable: false,
        children: ['', 'ssh-keys']
      }
    ]
  },
  getProjectSidebar: (main, portfolio) => {
    return [
      '',
      {
        title: portfolio,
        collapsable: true,
        children: ['portfolio/setup']
      }
    ]
  }
}
