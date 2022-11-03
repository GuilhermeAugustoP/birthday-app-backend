
const HealthCheckRoute = {
    path: '/api/healthcheck/liveness',
    method: 'get',
    execute: () => 'Ok'
}
exports.HealthCheckRoute = HealthCheckRoute