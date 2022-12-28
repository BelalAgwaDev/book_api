exports.quaryList={
    GET_STORE_LIST_QUARY:"SELECT store_id, store_name, store_address, store_code, created_on, created_by FROM bms.store;",
    SAVE_STORE_QUARY:"INSERT INTO bms.store (store_name, store_address, store_code, created_on, created_by) VALUES($1, $2, $3, $4, $5);"
}