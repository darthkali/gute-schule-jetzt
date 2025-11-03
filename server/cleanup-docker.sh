echo "Deleting images that are older than 10 days and are currently not used"
docker image prune -a --force --filter "until=240h"