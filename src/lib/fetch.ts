import NodeFetchCache, { MemoryCache } from 'node-fetch-cache';

export default NodeFetchCache.create({
	cache: new MemoryCache({
		ttl: 300
	})
});
