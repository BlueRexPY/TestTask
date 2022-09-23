export function toMb(size: number) { return Math.round(size / 8 / 1024) / 100 + " mb" };
export function pathToRoute(path_display: string) {
    return "/dropbox/__" +
        path_display
            ?.slice(1, path_display.length)
            .replace(/(\/)/g, "_")
}