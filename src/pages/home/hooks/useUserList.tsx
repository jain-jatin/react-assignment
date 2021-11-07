import { useEffect, useState } from "react";
import axios from "axios";

export const useUserList = (pageNumber: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState<{ img: string; userName: string }[]>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        setError(false);
        let cancel: any;
        axios({
            method: "GET",
            url: "https://randomuser.me/api/?inc=picture,name",
            params: { page: pageNumber, results: 15 },
            cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
            .then((res: any) => {
                setUsers([
                    ...users,
                    ...res.data.results.map((user: any) => {
                        const image = user.picture.medium;
                        const name =
                            "" +
                            user.name.title +
                            " " +
                            user.name.first +
                            " " +
                            user.name.last;
                        return {
                            img: image,
                            userName: name,
                        };
                    }),
                ]);
                setHasMore(res.data.results.length > 0);
                setLoading(false);
            })
            .catch((e) => {
                if (axios.isCancel(e)) return;
                setError(true);
            });
        return () => cancel();
    }, [pageNumber]);

    return { loading, error, users, hasMore, setLoading };
};
