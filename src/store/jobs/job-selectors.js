export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.jobs;

  return state.jobs.filter(job => {
    const jobFilters = [].concat(job.role, job.level, ...job.languages, ...job.tools);

    return filters.every(filter => jobFilters.includes(filter))
  })
}
