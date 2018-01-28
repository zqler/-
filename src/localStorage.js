function keyGetter(key) {
    return `app_[${key}]`;
};
export function storage(storage) {
    return {
        getItem(key) {
            return storage.getItem(keyGetter(key));
        },
        setItem(key, data) {
            storage.setItem(keyGetter(key), data);
        },
        getJSONItem(key) {
            let valueString = storage.getItem(keyGetter(key));
            if (!valueString)
                return;
            try {
                return JSON.parse(valueString);
            } catch (e) {
                return void 0;
            }
        },
        setJSONItem(key, data) {
            storage.setItem(keyGetter(key), JSON.stringify(data));
        },
        removeItem(key) {
            return storage.removeItem(keyGetter(key));
        },
        clear() {
            storage.clear();
        }
    };
}

export default storage(localStorage);