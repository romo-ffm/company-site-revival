
-- Restrict access to private storage buckets. These buckets store source assets
-- not served directly to website visitors, so block all client access. The
-- service_role bypasses RLS and remains able to manage objects.

CREATE POLICY "Deny client read on private asset buckets"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id NOT IN ('logo','abbildungen','bilderstadt','bildermenschen','logosmitgieder'));

CREATE POLICY "Deny client insert on private asset buckets"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id NOT IN ('logo','abbildungen','bilderstadt','bildermenschen','logosmitgieder'));

CREATE POLICY "Deny client update on private asset buckets"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id NOT IN ('logo','abbildungen','bilderstadt','bildermenschen','logosmitgieder'))
WITH CHECK (bucket_id NOT IN ('logo','abbildungen','bilderstadt','bildermenschen','logosmitgieder'));

CREATE POLICY "Deny client delete on private asset buckets"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id NOT IN ('logo','abbildungen','bilderstadt','bildermenschen','logosmitgieder'));
