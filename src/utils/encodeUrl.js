const encodeReserveRE = /[!'()*]/g;
const encodeReserveReplacer = function (e) {
    return '%' + e.charCodeAt(0).toString(16);
};
const commaRE = /%2C/g;

// import { DefaultSlots } from '../utils/types';

function parsePath(path) {
    let hash = '';
    let query = '';

    const hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
        hash = path.slice(hashIndex);
        path = path.slice(0, hashIndex);
    }

    const queryIndex = path.indexOf('?');
    if (queryIndex >= 0) {
        query = path.slice(queryIndex + 1);
        path = path.slice(0, queryIndex);
    }

    return {
        path,
        query,
        hash,
    };
}

function parseQuery(query) {
    const res = {};
    query = query.trim().replace(/^(\?|#|&)/, '');
    if (!query) {
        return res;
    }
    query.split('&').forEach((param) => {
        const parts = param.replace(/\+/g, ' ').split('=');
        const key = decodeURIComponent(parts.shift());
        const val = parts.length > 0 ? decodeURIComponent(parts.join('=')) : null;

        if (res[key] === undefined) {
            res[key] = val;
        } else if (Array.isArray(res[key])) {
            res[key].push(val);
        } else {
            res[key] = [res[key], val];
        }
    });
    return res;
}

const encode = function (str) {
    return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

function stringifyQuery(obj) {
    let res;
    if (obj) {
        res = Object.keys(obj).map((key) => {
            const val = obj[key];
            if (val === undefined) {
                return '';
            }
            if (val === null) {
                return encode(key);
            }
            if (Array.isArray(val)) {
                const result = [];
                val.forEach((val2) => {
                    if (val2 === undefined) {
                        return;
                    }
                    if (val2 === null) {
                        result.push(encode(key));
                    } else {
                        result.push(encode(key) + '=' + encode(val2));
                    }
                });
                return result.join('&');
            }
            return encode(key) + '=' + encode(val);
        }).filter((x) => x.length > 0).join('&');
    }
    return res ? ('?' + res) : '';
}


const encodeUrl = function (url) {
    if (!url) {
        return url;
    }
    try {
      // 包含单个 '%' 的 query 参数会被 decodeURIComponent 解析报错，例如：ABC%DEF
      const parsedPath = parsePath(url || '');
      const { path } = parsedPath;
      const { hash } = parsedPath;
      const query = parseQuery(parsedPath.query || '');
      return (path || '/') + stringifyQuery(query) + hash;
  } catch (e) {
      console.log(e);
      return url;
  }
};




export default encodeUrl;
