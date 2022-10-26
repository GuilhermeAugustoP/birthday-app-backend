
export const HealthCheckRoute = {
    path: '/api/healthcheck/liveness',
    method: 'healthcheck',
    execute: () => 'Ok'
}