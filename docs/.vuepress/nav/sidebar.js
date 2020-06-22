module.exports = {
  getDocumentationSidebar: (main, vueDependenciesBadges) => {
    return [
      {
        title: main,
        collapsable: false,
        children: [''],
      },
      {
        title: vueDependenciesBadges,
        collapsable: true,
        children: ['vue-dependencies-badges/'],
      },
    ]
  },
  getAboutSidebar: (main) => {
    return [
      '',
      // {
      //   title: main,
      //   collapsable: true,
      //   children: ['animal-crossings/'],
      // },
    ]
  },
  getSafeSidebar: (main, ssh) => {
    return [
      {
        title: main,
        collapsable: false,
        children: ['', 'ssh-keys'],
      },
    ]
  },
  getProjectSidebar: (main, portfolio) => {
    return [
      '',
      {
        title: portfolio,
        collapsable: true,
        children: ['portfolio/setup'],
      },
    ]
  },
}
